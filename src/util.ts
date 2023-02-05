import * as uniqid from 'uniqid';

import Tile from "./types/Tile";

import amara from "./assets/amara.png";
import buttstallion from "./assets/buttstallion.png";
import claptrap from "./assets/claptrap.jpg";
import flak from "./assets/flak.jpg";
import gaige from "./assets/gaige.png";
import jack from "./assets/jack.jpg";
import krieg from "./assets/krieg.jpg";
import lilith from "./assets/lilith.jpg";
import marcus from "./assets/marcus.jpg";
import moxxi from "./assets/moxxi.jpg";
import torgue from "./assets/torgue.jpg";
import zane from "./assets/zane.png";
import zero from "./assets/zero.jpg";
import roland from "./assets/roland.jpg";
import mordecai from "./assets/mordecai.jpg";
import brick from "./assets/brick.png";

export function shuffle(inputAr:any[]) {
    let result:any[] = cloneArray(inputAr);
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

export function cloneArray(input:any[]) {
    const result:any[] = [];
    input.forEach(val => result.push(Object.assign({}, val)));
    return result;
}

export function loadImageSet() {
    const array:Tile[] = new Array<Tile>();

    array.push(createTile(amara, uniqid(), "Amara"));
    array.push(createTile(buttstallion, uniqid(), "Butt Stallion"));
    array.push(createTile(claptrap, uniqid(), "Cl4ptr4p"));
    array.push(createTile(flak, uniqid(), "Fl4k"));
    array.push(createTile(gaige, uniqid(), "Gaige"));
    array.push(createTile(jack, uniqid(), "Handsome Jack"));
    array.push(createTile(krieg, uniqid(), "Krieg"));
    array.push(createTile(lilith, uniqid(), "Lilith"));
    array.push(createTile(marcus, uniqid(), "Marcus"));
    array.push(createTile(moxxi, uniqid(), "Moxxi"));
    array.push(createTile(torgue, uniqid(), "Mr. Torgue"));
    array.push(createTile(zane, uniqid(), "Zane"));
    array.push(createTile(zero, uniqid(), "Zer0"));
    array.push(createTile(roland, uniqid(), "Roland"));
    array.push(createTile(mordecai, uniqid(), "MordeCai"));
    array.push(createTile(brick, uniqid(), "Brick"));

    return array;
}

function createTile(src:string, id:string, alt:string) {
    const tile:Tile = {
        src:src,
        id: id,
        alt:alt,
        isSelected:false,
    }
    return tile;
}