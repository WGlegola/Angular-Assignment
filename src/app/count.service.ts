export class CountService{
    count: number = 0
    userSwitched(){
        this.count += 1
        console.log(this.count)
    }
}