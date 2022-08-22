import * as PIXI from 'pixi.js'
import { Game } from './game'

export class Player extends PIXI.Sprite {
xspeed= 0
yspeed= 0
    constructor(game: Game, texture:PIXI.Texture, x: number, y: number) {
        super(texture)
        this.anchor.set(0.5)
        this.x = x
        this.y = y
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    public update(delta: number): void {
        this.x += this.xspeed
        this.y += this.yspeed
        
    }

    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
                this.xspeed = -5
                break
            case "D":
                this.xspeed = 5
                break
            case "W":
                this.yspeed = -7             
                 break
            case "S":
                this.yspeed = 7
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
            case "D":
                this.xspeed = 0
                break
            case "W":
            case "S":
                this.yspeed = 0
                break
        }

}