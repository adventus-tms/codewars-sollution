void main(){
  print(evenOrOdd(10));
}

String evenOrOdd(int number) {
  // Code here
  if(number % 2 == 0){
    return "Even";
  }else{
    return "Odd";
  }
}