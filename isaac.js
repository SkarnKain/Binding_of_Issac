function Isaac() {
    this.pos = createVector(width / 2, height / 2);
    this.dir = "DOWN";
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.framecount0 = 0;
    this.framecount1 = 0;


    this.update = function () {
        this.vel.add(this.acc);
        this.vel.mult(drag);
        this.pos.add(this.vel);
        switch (isaac.dir) {
            case "DOWN" :
                isaac_body_img = img_body_D;
                if (frameCount % 120 < 5) {isaac_head_img = img_head[1]} else {isaac_head_img = img_head[0]}
                break;
            case "RIGHT" :
                isaac_body_img = img_body_R;
                if (frameCount % 120 < 5) {isaac_head_img = img_head[3]} else {isaac_head_img = img_head[2]}
                break;
            case "LEFT" :
                isaac_body_img = img_body_L;
                if (frameCount % 120 < 5) {isaac_head_img = img_head[4]} else {isaac_head_img = img_head[5]}
                break;
            case "UP" :
                isaac_body_img = img_body_U;
                if (frameCount % 120 < 5) {isaac_head_img = img_head[7]} else {isaac_head_img = img_head[6]}
                break;
            default :
                if (frameCount % 120 < 5) {isaac_head_img = img_head[1]} else {isaac_head_img = img_head[0]}
        }
    }
    
    
    this.show = function () {
        this.framecount0 += max([abs(this.vel.x),abs(this.vel.y)]);
        this.framecount1 = round(this.framecount0/10) % 10;
        image(isaac_body_img[this.framecount1], this.pos.x, this.pos.y + isaac_head_img.height * 0.75, isaac_body_img[this.framecount1].width*2, isaac_body_img[this.framecount1].height*2);
        image(isaac_head_img, this.pos.x, this.pos.y, isaac_head_img.width*2, isaac_head_img.height*2);
    }
}