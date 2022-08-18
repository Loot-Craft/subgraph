// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get ennemyId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get ennemyId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LootCraftBattle extends ethereum.SmartContract {
  static bind(address: Address): LootCraftBattle {
    return new LootCraftBattle("LootCraftBattle", address);
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  battle(ennemyId: BigInt, lootId: BigInt): boolean {
    let result = super.call("battle", "battle(uint256,uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId),
      ethereum.Value.fromUnsignedBigInt(lootId)
    ]);

    return result[0].toBoolean();
  }

  try_battle(ennemyId: BigInt, lootId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("battle", "battle(uint256,uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId),
      ethereum.Value.fromUnsignedBigInt(lootId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getApproved(ennemyId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(ennemyId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(ennemyId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getEnnemies(ennemyId: BigInt): string {
    let result = super.call("getEnnemies", "getEnnemies(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);

    return result[0].toString();
  }

  try_getEnnemies(ennemyId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getEnnemies", "getEnnemies(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getEnnemiesStrength(ennemyId: BigInt): BigInt {
    let result = super.call(
      "getEnnemiesStrength",
      "getEnnemiesStrength(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(ennemyId)]
    );

    return result[0].toBigInt();
  }

  try_getEnnemiesStrength(ennemyId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getEnnemiesStrength",
      "getEnnemiesStrength(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(ennemyId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getEnnemyName(ennemyId: BigInt): string {
    let result = super.call(
      "getEnnemyName",
      "getEnnemyName(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(ennemyId)]
    );

    return result[0].toString();
  }

  try_getEnnemyName(ennemyId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getEnnemyName",
      "getEnnemyName(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(ennemyId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getEnnemyRarity(ennemyId: BigInt): string {
    let result = super.call(
      "getEnnemyRarity",
      "getEnnemyRarity(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(ennemyId)]
    );

    return result[0].toString();
  }

  try_getEnnemyRarity(ennemyId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getEnnemyRarity",
      "getEnnemyRarity(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(ennemyId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getLootStrength(lootId: BigInt, ennemyId: BigInt): BigInt {
    let result = super.call(
      "getLootStrength",
      "getLootStrength(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(lootId),
        ethereum.Value.fromUnsignedBigInt(ennemyId)
      ]
    );

    return result[0].toBigInt();
  }

  try_getLootStrength(
    lootId: BigInt,
    ennemyId: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLootStrength",
      "getLootStrength(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(lootId),
        ethereum.Value.fromUnsignedBigInt(ennemyId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getMineral1(ennemyId: BigInt): string {
    let result = super.call("getMineral1", "getMineral1(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);

    return result[0].toString();
  }

  try_getMineral1(ennemyId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getMineral1", "getMineral1(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getMineral2(ennemyId: BigInt): string {
    let result = super.call("getMineral2", "getMineral2(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);

    return result[0].toString();
  }

  try_getMineral2(ennemyId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getMineral2", "getMineral2(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getMineral3(ennemyId: BigInt): string {
    let result = super.call("getMineral3", "getMineral3(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);

    return result[0].toString();
  }

  try_getMineral3(ennemyId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getMineral3", "getMineral3(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getMonster1(ennemyId: BigInt): string {
    let result = super.call("getMonster1", "getMonster1(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);

    return result[0].toString();
  }

  try_getMonster1(ennemyId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getMonster1", "getMonster1(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getMonster2(ennemyId: BigInt): string {
    let result = super.call("getMonster2", "getMonster2(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);

    return result[0].toString();
  }

  try_getMonster2(ennemyId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getMonster2", "getMonster2(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getMonster3(ennemyId: BigInt): string {
    let result = super.call("getMonster3", "getMonster3(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);

    return result[0].toString();
  }

  try_getMonster3(ennemyId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getMonster3", "getMonster3(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getNature1(ennemyId: BigInt): string {
    let result = super.call("getNature1", "getNature1(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);

    return result[0].toString();
  }

  try_getNature1(ennemyId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getNature1", "getNature1(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getNature2(ennemyId: BigInt): string {
    let result = super.call("getNature2", "getNature2(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);

    return result[0].toString();
  }

  try_getNature2(ennemyId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getNature2", "getNature2(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getNature3(ennemyId: BigInt): string {
    let result = super.call("getNature3", "getNature3(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);

    return result[0].toString();
  }

  try_getNature3(ennemyId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getNature3", "getNature3(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(ennemyId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(ennemyId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  play(ennemyId: BigInt, lootId: BigInt): string {
    let result = super.call("play", "play(uint256,uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId),
      ethereum.Value.fromUnsignedBigInt(lootId)
    ]);

    return result[0].toString();
  }

  try_play(ennemyId: BigInt, lootId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("play", "play(uint256,uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId),
      ethereum.Value.fromUnsignedBigInt(lootId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(ennemyId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(ennemyId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(ennemyId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get ennemyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get ennemyId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get lootId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ennemyId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ennemyId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ennemyId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
