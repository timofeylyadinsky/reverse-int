module.exports = function reverse (n) {
    let rez = 0;
    let tmp = 1;
    if(n<0) n=-n
    while(n>tmp){
      tmp*=10;
    }
    tmp/=10;
    while(n>=1){
        rez+=n%10*tmp;
        tmp/=10;
        n=Math.floor(n/10)
    }
  return rez;
}
