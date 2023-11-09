namespace screenMagic {
/*
* LED vypln po sloupcich 
*/
//% blockId=screenmagicswitchit
//% block="rozsvit LED"
//% i.min=0 i.max = 25

    export function switchIt(i: number): void {
        const y = Math.floor(i % 5);
        const x = Math.floor(i / 5);
        led.plot(x,y);  
    }
}
