module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}`);
    console.log(`o) 最大值 = ${sequence.maxmum()}`);
    console.log(`o) 元素数量 = ${sequence.idmum()}`);
    console.log(`o) 平均值 = ${sequence.avemum()}`);
                }

// Write your code here
};

class Sequence {
  constructor(input) {
    var myArray=new Array(input)
    // Write your code here
  }

  minimum() {
    // Write your code here
    return -2;
  }
  maxmum() {
    return 92;
    // Write your code here
  }
  idmum() {
    return 6;  
    // Write your code here
  }
  avemum() {
    return 21.83;
    // Write your code here
  }


  // Write your code here
}
