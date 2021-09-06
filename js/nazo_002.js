'use strict';
{
   console.log("hello popo\n");
   console.log("\thello popo\n");
   console.log("hello \"popo\"\n");
   console.log("\t" + 2**10 +"\n");
   // parseInt("5",10) : 文字列"5"を十進数に変換する関数。
   // false として評価される値は 0, null, undefined, 空文字列(""), false自体
   // 上記以外は true
   // === と !==

   let triple_a = 5
   triple_a === 5 ?
      console.log("間違いなく5です!!"):
      console.log("間違いなく5ではないです!!");
   //テンプレートリテラルはバッククオート
   console.log(`hello ${triple_a}`);
   //ループを一回飛ばすのはcontinue
   //ループを抜けるのはbreak
   //return後の処理は実行されない

   // 以下関数式
   const double_A = function (a, b, c) {
      return (a + b + c);
   };
   console.log(double_A(1,2,3));

   // 函数式の短縮記法であるアロー関数の記法を見ていく
   const single_A = (a, b, c) => a + b + c;
   const second_A = a => a + 1

   console.log(single_A(1,3,8));
   console.log(second_A(8));

   //変数の競合を避けるためにはブロックでスコープを分けてあげればよい。
   {
      //これがブロックである。 
   }

   // 配列
   // constで定義した配列は要素への再代入は可能である。
   const Bhgg = [80,90,50];
   Bhgg[3] = 999;
   //配列の先頭や末尾を変更するためのメゾッド
   Bhgg.push(100,200);
   Bhgg.shift();
   Bhgg.unshift(40);
   Bhgg.pop();
   //配列の途中の要素を変更するメゾッド
   Bhgg.splice(1,2,0.1,0.1);
   console.log(Bhgg);
   console.log(Bhgg.length);

   //スプレッド構文 配列の中の要素を展開しておくのと同等の意味を持つ
   const Plus_plus = [600,600];
   const Lastarray = [...Bhgg, ...Plus_plus];

   for (let i = 0; i < Lastarray.length; i++) {
      console.log(`現在${i}番目の変数は${Lastarray[i]}です！！`);
   }

   //分割代入
   const [aa,bb] = Plus_plus; //代入と同時に定数の定義もしている
   const [cc,dd,...others] = Bhgg;
   let xx = 30;
   let yy = 40;
   console.log(aa);
   console.log(bb);
   console.log(xx);
   console.log(yy);
   [xx,yy] = [aa,bb];
   console.log(xx);
   console.log(yy);
   console.log(others);


   Bhgg.forEach((bee,index) => {
      console.log(`Bhggの要素は順番に${bee}(今は${index}番目)`);
   });

   // const Bees = Bhgg.map((bee) => {
   //    bee = bee + 20;
   // });

   const Bees = Bhgg.map(bee => bee = bee + 20);
   console.log(Bees);
   //arrow関数の短縮記法の練習
   Bees.forEach((bee,index) => console.log(`Bhggの要素は順番に${bee}(今は${index}番目)`));

   // filter関数
   const EvenBees = Bees.filter(bee => bee % 2 === 0);
   console.log(EvenBees);
}
{
   //オブジェクト記法
   const pointer = {
      x: 100,
      y: 200,   //ここに,を付けてもエラーにはならない。
   };
   console.log(pointer);

   // プロパティの指定方法(変更方法)
   pointer.x *= 2
   pointer['y'] *= 2
   console.log(pointer);

   //プロパティの追加、削除方法
   pointer.z = 500;
   console.log(pointer);
   delete pointer.z;
   console.log(pointer);

   // スプレッド構文、分割代入、レスト構文のオブジェクトに対する応用
   const pointerAdd = {
      existance: 0,
      color: 'Blue',
   };
   const newPointer = {
      ...pointer,
      ...pointerAdd,
   };
   console.log(newPointer);

   const {x,y,color,...others} = newPointer;
   console.log(others);
}