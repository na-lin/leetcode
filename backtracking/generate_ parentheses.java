/**
  func(n) -> []:
    result = [];

    backtracking(n, result,0,0,"");


  backtracking(n, result, left, right, str) -> void:
    if right > left:
      return

    // right <= left

    if(left === right === n):
      result.add(str)
      return

    // right < left < n

    if left < n: // left < n -> I can add left parenthe
      backtracking(n,result, left+1, right, str+'(')

    if right < left: // right < left, I can add right ) which is valid
      backtracking(n,result, left, right+1, str+')')


 */

class Solution{
  public List<String> generateParenthese(int n){
    List<String> result = new ArrayList<>();
    backtracking(n,result, 0,0,"");
    return result;
  }

  private void backtracking(int n, List<String> result,int left, int right, String str ){
    if( right > left) return;

    if(left == n && right == n){
      result.add(str);
      return;
    }

    if(left < n) backtracking(n,result, left+1, right, str+"(");
    if(right < left) backtracking(n,result,left,right+1, str+")");
  }
}
