import java.io.*;
import java.util.*;

/*
 * To execute Java, please define "static void main" on a class
 * named Solution.
 *
 * If you need more classes, simply define them inline.
 */

class Solution {
  public static void main(String[] args) {
    
    ArrayList<Integer[]> input =new ArrayList<Integer[]>();
    input.add(new Integer[]{ 1,4,5 });
    input.add(new Integer[]{ 1,3,4 });
    input.add(new Integer[]{2, 6});

    // new Comparator
    
    PriorityQueue<Integer> queue= new PriorityQueue<Integer>(new Comparator<Integer>() {
    @Override public int compare(Integer o1, Integer o2) {
        return o1 - o2 ;
    }});
    
    for(int i =0;i < input.size();i ++)
    {
        InsertIntoPriorityQueue(queue, input.get(i));
    }
    
    ArrayList<Integer> result = new ArrayList<Integer>();
    
    while(queue.size() > 0)
    {
      result.add(queue.remove());
    }
    
    PrintResult(result);
  }
  
  public static void InsertIntoPriorityQueue(PriorityQueue<Integer> heap, Integer[] array)
  {
    // 
    for(int i =0;i < array.length;i ++)
    {
        heap.add(array[i]);
    }
  }
  
  public static void PrintResult(ArrayList<Integer> arrayList)
  {
    for(int i =0;i < arrayList.size();i ++)
    {
      System.out.print(arrayList.get(i));
    }
  }

  
  
}
