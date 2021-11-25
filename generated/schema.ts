// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromString(""));
    this.set("lastTransferTime", Value.fromBigInt(BigInt.zero()));
    this.set("lastTransferBlock", Value.fromBigInt(BigInt.zero()));
    this.set("os", Value.fromString(""));
    this.set("texteditor", Value.fromString(""));
    this.set("clothing", Value.fromString(""));
    this.set("language", Value.fromString(""));
    this.set("industry", Value.fromString(""));
    this.set("location", Value.fromString(""));
    this.set("mind", Value.fromString(""));
    this.set("vibe", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get lastTransferTime(): BigInt {
    let value = this.get("lastTransferTime");
    return value!.toBigInt();
  }

  set lastTransferTime(value: BigInt) {
    this.set("lastTransferTime", Value.fromBigInt(value));
  }

  get lastTransferBlock(): BigInt {
    let value = this.get("lastTransferBlock");
    return value!.toBigInt();
  }

  set lastTransferBlock(value: BigInt) {
    this.set("lastTransferBlock", Value.fromBigInt(value));
  }

  get os(): string {
    let value = this.get("os");
    return value!.toString();
  }

  set os(value: string) {
    this.set("os", Value.fromString(value));
  }

  get texteditor(): string {
    let value = this.get("texteditor");
    return value!.toString();
  }

  set texteditor(value: string) {
    this.set("texteditor", Value.fromString(value));
  }

  get clothing(): string {
    let value = this.get("clothing");
    return value!.toString();
  }

  set clothing(value: string) {
    this.set("clothing", Value.fromString(value));
  }

  get language(): string {
    let value = this.get("language");
    return value!.toString();
  }

  set language(value: string) {
    this.set("language", Value.fromString(value));
  }

  get industry(): string {
    let value = this.get("industry");
    return value!.toString();
  }

  set industry(value: string) {
    this.set("industry", Value.fromString(value));
  }

  get location(): string {
    let value = this.get("location");
    return value!.toString();
  }

  set location(value: string) {
    this.set("location", Value.fromString(value));
  }

  get mind(): string {
    let value = this.get("mind");
    return value!.toString();
  }

  set mind(value: string) {
    this.set("mind", Value.fromString(value));
  }

  get vibe(): string {
    let value = this.get("vibe");
    return value!.toString();
  }

  set vibe(value: string) {
    this.set("vibe", Value.fromString(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokens", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Account entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }
}
