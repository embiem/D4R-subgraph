import { DEVS, Transfer } from "../generated/DEVS/DEVS";
import { Account, Token } from "../generated/schema";

export function handleTransfer(event: Transfer): void {
  let tokenId = event.params.tokenId;
  let from = event.params.from;
  let to = event.params.to;

  let contract = DEVS.bind(event.address);

  let fromAccount = Account.load(from.toHex());
  let toAccount = Account.load(to.toHex());

  if (!toAccount) {
    toAccount = new Account(to.toHex());
  }

  // Just create new, as we don't need to use values from store
  let token = new Token(tokenId.toString());
  token.owner = to.toHex();
  token.lastTransferTime = event.block.timestamp;
  token.lastTransferBlock = event.block.number;

  token.clothing = contract.getClothing(tokenId);
  token.industry = contract.getIndustry(tokenId);
  token.language = contract.getLanguage(tokenId);
  token.location = contract.getLocation(tokenId);
  token.mind = contract.getMind(tokenId);
  token.os = contract.getOS(tokenId);
  token.texteditor = contract.getTextEditor(tokenId);
  token.vibe = contract.getVibe(tokenId);

  token.save();

  // Reference in account
  toAccount.tokens.push(tokenId.toString());
  toAccount.save();

  // Remove from sender's account, if existant
  if (fromAccount) {
    let newTokens: Array<string> = [];

    for (let i = 0; i < fromAccount.tokens.length; i++) {
      if (fromAccount.tokens[i] != tokenId.toString())
        newTokens.push(fromAccount.tokens[i]);
    }

    fromAccount.tokens = newTokens;
    fromAccount.save();
  }
}
