/**
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.


Conditions -> if we place quene at save place
- not same column
- not same row
- not diagonal

1) start in the leftmost column
2) If all queens are placed
    return true
3) Try all row in the current column
  Do following for every tried row
    a) If the queen can be placed safely in this row
      then mark this [row, column] as part of the solution and recursively check if placing queen here leads to a solution

    b)If placing the queen in [row, column] leads to a solution, then return true

    c)If placing the queen doesn't lead to a solution then unmark this [row, column] (Backtrack) and go to step (a) to try other rows.

3) If all rows have been tried and nothing worked, return false to trigger backtracking.
 */
