//blocks
{
  var winn=createSprite(10,390,20,20);
  //kill
  {
    var kill=createGroup();
    var kil1=createSprite(900,390,19,20);
    kil1.shapeColor="red";
    kill.add(kil1);
  }
  //wall
  {
    var wall=createGroup();
    var wal1=createSprite(900,390,20,20);
    wal1.shapeColor="black";
    wall.add(wal1);
    var wal2=createSprite(900,390,20,20);
    wal2.shapeColor="black";
    wall.add(wal2);
    var wal3=createSprite(900,390,20,20);
    wal3.shapeColor="black";
    wall.add(wal3);
    var wal4=createSprite(900,390,20,20);
    wal4.shapeColor="black";
    wall.add(wal4);
    var wal5=createSprite(900,390,20,20);
    wal5.shapeColor="black";
    wall.add(wal5);
  }
  //grav
  {
    var grav=createGroup();
    var rav1=createSprite(200,-110,20,20);
    rav1.shapeColor="orange";
    grav.add(rav1);
  }
  //portal
  {
    var tp1i=createSprite(900,390,20,20);
    var tp1o=createSprite(900,390,20,20);
    tp1i.shapeColor="yellow";
    tp1o.shapeColor="yellow";
  }
}
//other
{
  var fc=1;
  var level=1;
  var ball=createSprite(200,390,20,20);
  createEdgeSprites();
  ball.bounciness=0;
  winn.shapeColor="green";
ball.shapeColor="blue";
}
function draw() {
  background("white");
  //physycs
  {
  rav1.velocityY+=1;
  ball.velocityY+=1.000001;
  ball.collide(edges); 
  ball.collide(wall);
  
  ball.displace(rav1);
  
  rav1.collide(wall); 
  rav1.collide(edges);
  rav1.collide(kill); 
  rav1.collide(winn);
  rav1.collide(tp1i); 
  rav1.collide(tp1o);
  
  ball.collide(rav1);
  
  }
  //control
  {
  if (keyDown("space")&&(ball.velocityY==0||ball.velocityY==2.2204460492503128e-16||ball.velocityY==1.0000010000000001)){
  ball.velocityY=-10;  
  }
  if (keyDown("left")){
    ball.velocityX=-10;
  }
  if (keyDown("right")){
    ball.velocityX=10;
  }
  if (keyWentUp("left")||keyWentUp("right")){
    ball.velocityX=0;
  }
  if (keyWentDown("r")){
    ball.x=200;
    ball.y=390;
    fc=1;
  }
  }
  //levels
  {
    if(level==2){
      wal1.x=30;
    }
    if(level==3){
      wal1.x=900;
      
      kil1.x=30;
    }
    if(level==4){
      kil1.x=900;
      
      wal1.x=20;
      wal1.y=70;
      wal1.width=40;
      
      tp1i.x=10;
      
      tp1o.x=10;
      tp1o.y=10;
      
      winn.x=50;
      winn.y=50;
    }
    if(level==5&&fc==1){
      wal1.x=900;
      tp1i.x=900;
      tp1o.x=900;
      
      rav1.x=220;
      rav1.y=390;
      
      winn.x=10;
      winn.y=300;
      
      fc++;
    }
    if(level==6){
      rav1.y=-110;
      
      kil1.x=10;
      
      winn.x=390;
      winn.y=330;
      
      wal1.x=370;
      wal1.y=360;
      wal1.width=20;
      wal1.height=80;
    }
    if(level==7&&fc==1){
      kil1.x=900;
      
      rav1.x=50;
      rav1.y=370;
      
      winn.x=10;
      winn.y=370;
      
      wal1.x=50;
      wal1.y=390;
      wal1.height=20;
      
      wal2.x=30;
      wal2.y=350;
      wal2.width=60;
      
      fc++;
    }
    if(level>=8&&fc==1){
      wal1.x=95;
      wal1.y=370;
      wal1.width=150;
      wal1.height=60;
      
      wal2.x=305;
      wal2.y=380;
      wal2.width=150;
      wal2.height=40;
      
      wal3.x=390;
      wal3.y=350;
      
      wal4.x=350;
      wal4.y=30;
      wal4.width=60;
      
      wal5.x=220;
      wal5.y=170;
      wal5.height=340;
      
      kil1.x=200;
      kil1.y=390;
      kil1.width=60;
      
      tp1i.x=390;
      tp1i.y=370;
      
      tp1o.x=390;
      tp1o.y=30;
      
      rav1.x=350;
      rav1.y=10;
      rav1.width=60;
      
      winn.y=390;
      fc++;
    }
    if(level==9){
      console.log(World.seconds);
      level++;
    }
  }
  {
  if(ball.isTouching(kill)){
    ball.x=390;
    ball.y=390;
    ball.velocityX=0;
    ball.velocityY=0;
  }
  if(ball.isTouching(winn)||keyDown("1")||keyWentDown("2")){
    level++;
    fc=1;
    ball.x=200;
    ball.y=390;
    ball.velocityX=0;
    ball.velocityY=0;
  }
  //tp
  {
  if(ball.isTouching(tp1i)){
    ball.x=tp1o.x;
    ball.y=tp1o.y;
  }
  }
  }
  drawSprites(); 
}