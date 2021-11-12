
function setup(){
  //blocks
  {
    winn=createSprite(10,390,20,20);
    //kill
    {
      kill=createGroup();
      kil1=createSprite(900,390,19,20);
      kil1.shapeColor="red";
      kill.add(kil1);
    }
    //wall
    {
      wall=createGroup();
      wal1=createSprite(900,390,20,20);
      wal1.shapeColor="black";
      wall.add(wal1);
      wal2=createSprite(900,390,20,20);
      wal2.shapeColor="black";
      wall.add(wal2);
      wal3=createSprite(900,390,20,20);
      wal3.shapeColor="black";
      wall.add(wal3);
      wal4=createSprite(900,390,20,20);
      wal4.shapeColor="black";
      wall.add(wal4);
      wal5=createSprite(900,390,20,20);
      wal5.shapeColor="black";
      wall.add(wal5);
      wal6=createSprite(900,390,20,20);
      wal6.shapeColor="black";
      wall.add(wal6);
      wal7=createSprite(900,390,20,20);
      wal7.shapeColor="black";
      wall.add(wal7);
      wal8=createSprite(900,390,20,20);
      wal8.shapeColor="black";
      wall.add(wal8);
    }
    //grav
    {
      grav=createGroup();
      rav1=createSprite(200,-110,20,20);
      rav1.shapeColor="orange";
      grav.add(rav1);
      grav=createGroup();
      rav2=createSprite(200,-110,20,20);
      rav2.shapeColor="orange";
      grav.add(rav2);
    }
    //portal
    {
      tp1i=createSprite(900,390,20,20);
      tp1o=createSprite(900,390,20,20);
      tp1i.shapeColor="yellow";
      tp1o.shapeColor="yellow";
      tp2i=createSprite(900,390,20,20);
      tp2o=createSprite(900,390,20,20);
      tp2i.shapeColor="yellow";
      tp2o.shapeColor="yellow";
      tp3i=createSprite(900,390,20,20);
      tp3o=createSprite(900,390,20,20);
      tp3i.shapeColor="yellow";
      tp3o.shapeColor="yellow";
      tp4i=createSprite(900,390,20,20);
      tp4o=createSprite(900,390,20,20);
      tp4i.shapeColor="yellow";
      tp4o.shapeColor="yellow";
    }
    //gate
    {
      gate=createGroup();
      key1=createSprite(900,390,15,15);
      gat1=createSprite(900,390,20,20);
      key1.rotation=45;
      key1.shapeColor="purple";
      gat1.shapeColor="purple";
      gate.add(gat1);
      key2= createSprite(900,390,15,15);
      gat2=createSprite(900,390,20,20);
      key2.rotation=45;
      key2.shapeColor="purple";
      gat2.shapeColor="purple";
      gate.add(gat2);
      key3=createSprite(900,390,15,15);
      gat3=createSprite(900,390,20,20);
      key3.rotation=45;
      key3.shapeColor="purple";
      gat3.shapeColor="purple";
      gate.add(gat3);
      key4=createSprite(900,390,15,15);
      gat4=createSprite(900,390,20,20);
      key4.rotation=45;
      key4.shapeColor="purple";
      gat4.shapeColor="purple";
      gate.add(gat4);
      key5=createSprite(900,390,15,15);
      gat5=createSprite(900,390,20,20);
      key5.rotation=45;
      key5.shapeColor="purple";
      gat5.shapeColor="purple";
      gate.add(gat5);
    }
    //filter orange
    {
      filg=createGroup();
      fil1=createSprite(900,390,15,15);
      fil1.shapeColor="orange";
      fil1.rotation=45;
      filg.add(fil1);
      fil3=createSprite(900,390,15,15);
      fil3.shapeColor="orange";
      fil3.rotation=45;
      filg.add(fil3);
    }
    //filter blue
    {
      filb=createGroup();
      fil2=createSprite(900,390,15,15);
      fil2.shapeColor="blue";
      fil2.rotation=45;
      filb.add(fil2);
    }
  }
  //other
  {
    fc=1;
    level=1;
    ball=createSprite(200,390,20,20);
    //edges
    {
      edges=createGroup();
      leftEdge=createSprite(-50,200,100,400);
      rightEdge=createSprite(450,200,100,400);
      bottomEdge=createSprite(200,450,400,100);
      topEdge=createSprite(200,-50,400,100);
      edges.add(leftEdge);
      edges.add(rightEdge);
      edges.add(topEdge);
      edges.add(bottomEdge);
    }
    ball.bounciness=0;
    winn.shapeColor="green";
    ball.shapeColor="blue";
    rav1.depth=100;
  }
  }
  function draw() {
    background("white");
    //physycs
    {
      rav1.velocityY+=1;
      rav2.velocityY+=1;
      ball.velocityY+=1.000001;
      ball.collide(edges); 
      ball.collide(wall);
      ball.collide(filg);
      ball.collide(gate);
    
      ball.displace(rav1);
      ball.displace(rav2);
      
      rav2.collide(wall);
      rav2.collide(edges);
    
      rav1.collide(wall); 
      rav1.collide(filb); 
      rav1.collide(gate); 
      rav1.collide(edges);
      rav1.collide(kill); 
      rav1.collide(winn);
      rav1.collide(tp1i); 
      rav1.collide(tp1o);
    
      ball.collide(rav1);
      ball.collide(rav2);
    
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
      if(level==8&&fc==1){
        ball.x=240;
        ball.y=340;
        
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
      if(level==9&&fc==1){
        wal1.x=20;
        wal1.y=370;
        wal1.width=40;
        wal1.height=20;
        
        wal2.x=900;
        
        wal3.x=900;
        
        wal4.x=900;
        
        wal5.x=900;
        
        kil1.x=900;
        
        tp1i.x=900;
        tp1o.x=900;
        
        rav1.x=900;
        
        gat1.x=30;
        key1.x=390;
        fc++;
      }
      if(level==10&&fc==1){
        wal1.x=210;
        wal1.y=50;
        wal1.width=340;
        wal1.height=20;
        
        wal2.x=20;
        wal2.y=90;
        wal2.width=40;
        wal2.height=20;
        
        wal3.x=370;
        wal3.y=70;
        
        rav1.x=50;
        rav1.y=10;
        rav1.width=20;
        
        tp1o.x=10;
        tp1o.y=30;
        tp1i.x=390;
        tp1i.y=390;
        
        fil1.x=50;
        fil1.y=70;
        
        winn.y=300;
        
        gat1.x=900;
        key1.x=900;
        fc++;
      }
      if(level==11&&fc==1){
        wal1.x=30;
        wal1.y=350;
        wal1.width=60;
        wal1.height=20;
        
        wal2.x=50;
        wal2.y=370;
        wal2.width=20;
        
        wal3.x=900;
        
        rav1.x=90;
        rav1.y=390;
        
        tp1o.x=900;
        tp1i.x=900;
        
        fil1.x=900;
        
        fil2.x=50;
        
        winn.y=390;
        fc++;
      }
      if(level==12&&fc==1){
        wal1.x=360;
        wal1.width=80;
        
        wal2.x=330;
        
        rav1.x=370;
        
        gat1.x=330;
        
        key1.x=390;
        key1.y=330;
        
        fil2.x=390;
        
        winn.y=300;
        fc++;
      }
      if(level==13&&fc==1){
        wal1.x=900;
        
        wal2.x=900;
        
        rav1.x=900;
        
        gat1.x=10;
        
        key1.x=179;
        key1.y=390;
        
        fil2.x=900;
        fc++;
      }
      if(level==14&&fc==1){
        wal1.x=190;
        wal1.y=355;
        wal1.width=380;
        wal1.height=90;
        
        wal2.x=20;
        wal2.y=280;
        wal2.width=40;
         
        rav1.x=70;
        rav1.y=300;
        rav1.velocityY=0;
        
        gat1.x=30;
        gat1.y=300;
        
        key1.x=390;
        key1.y=390;
        
        ball.y=300;
        fc++;
      }
      if(level==15){
        wal1.x=370;
        wal1.y=375;
        wal1.width=20;
        wal1.height=50;
        
        wal2.x=200;
        wal2.width=400;
        
        wal3.x=390;
        wal3.y=355;
        wal3.width=20;
        wal3.height=90;
        
        rav1.y=-110;
        
        gat1.x=900;
        
        key1.x=900;
        fc++;
      }
      if(level>=16&&fc==1){
        tp1i.x=350;
        tp1i.y=370;
        tp1o.x=10;
        tp1o.y=10;
        
        tp2i.x=10;
        tp2i.y=260;
        tp2o.x=10;
        tp2o.y=370;
        
        tp3i.x=50;
        tp3i.y=390;
        tp3o.x=370;
        tp3o.y=10;
        
        tp4i.x=390;
        tp4i.y=260;
        tp4o.x=330;
        tp4o.y=30;
        ///////////
        wal1.x=10;
        wal1.y=30;
        wal1.height=20;
        
        wal3.x=30;
        wal3.y=345;
        wal3.height=110;
        
        wal4.x=20;
        wal4.y=240;
        wal4.width=40;
        
        wal5.x=80;
        wal5.y=380;
        wal5.width=40;
        wal5.height=40;
        
        wal6.x=350;
        wal6.y=60;
        wal6.height=80;
        
        wal7.x=370;
        wal7.y=70;
        
        wal8.x=370;
        wal8.y=240;
        wal8.height=280;
        //////////////
        gat1.x=390;
        gat1.y=110;
        key1.x=390;
        key1.y=350;
        
        gat2.x=390;
        gat2.y=30;
        key2.x=50;
        key2.y=300;
        
        gat3.x=350;
        gat3.y=10;
        key3.x=50;
        key3.y=370;
        
        gat5.x=30;
        gat5.y=260;
        key5.x=390;
        key5.y=240;
        ///////////
        fil1.x=50;
        fil1.y=350;
        
        fil2.x=370;
        fil2.y=30;
        
        fil3.x=390;
        fil3.y=110;
        ///////////
        rav1.x=90;
        rav1.y=350;
        
        rav2.x=370;
        rav2.y=390;
        ///////////
        kil1.x=370;
        kil1.y=90;
        kil1.width=20;
        //////////////
        winn.y=300;
        fc++;
      }
    }
    {
      //kill
      if(ball.isTouching(kill)){
        ball.x=390;
        ball.y=390;
        ball.velocityX=0;
        ball.velocityY=0;
      }
      //winn
      if(ball.isTouching(winn)||keyDown("1")||keyWentDown("2")){
        console.log(level+":"+World.seconds);
        level++;
        fc=1;
        ball.x=200;
        ball.y=390;
        ball.velocityX=0;
        ball.velocityY=0;
      }
      //tp
      if(ball.isTouching(tp1i)){
        ball.x=tp1o.x;
        ball.y=tp1o.y;
      }
      if(ball.isTouching(tp2i)){
        ball.x=tp2o.x;
        ball.y=tp2o.y;
      }
      if(rav1.isTouching(tp2i)){
        rav1.x=tp2o.x;
        rav1.y=tp2o.y;
      }
      if(rav1.isTouching(tp3i)){
        rav1.x=tp3o.x;
        rav1.y=tp3o.y;
      }
      if(rav1.isTouching(tp4i)){
        rav1.x=tp4o.x;
        rav1.y=tp4o.y;
      }
      //gat 
      if(ball.isTouching(key1)||rav1.isTouching(key1)){
        gat1.x=900;
        key1.x=900;
      }
      if(ball.isTouching(key2)||rav1.isTouching(key2)){
        gat2.x=900;
        key2.x=900;
      }
      if(rav1.isTouching(key3)||rav1.isTouching(key3)){
        gat3.x=900;
        key3.x=900;
      }
      if(ball.isTouching(key4)||rav1.isTouching(key4)){
        gat4.x=900;
        key4.x=900;
      }
      if(ball.isTouching(key5)||rav1.isTouching(key5)){
        gat5.x=900;
        key5.x=900;
      }
    }
    drawSprites(); 
  } 
