import { Footman } from "../modules/obj-edit/test"
import { initArray } from "../modules/utils/array"
import { printTable } from "../modules/utils/object"
import { fourCC } from "../modules/utils/other"

// const u = CreateUnit(Player(0), FourCC("hpea"), 0, 0, 0)
// print(IsUnitInForce(u, bj_FORCE_ALL_PLAYERS))
// print(IsUnitInForce(u, bj_FORCE_PLAYER[0]))
// print(IsUnitInForce(u, bj_FORCE_PLAYER[1]))
// print(IsUnitInForce(u, bj_FORCE_PLAYER[10]))

// const force = CreateForce()
// ForceAddPlayer(force, Player(0))

// print(IsUnitInForce(u, force))

const arr = initArray([1, 2, 3], 3)
printTable(arr, 'arr')


const footman = CreateUnit(Player(0), fourCC(Footman.id), 0, 0, 0)
print(GetUnitName(footman))