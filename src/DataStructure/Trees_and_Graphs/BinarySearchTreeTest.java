package DataStructure.Trees_and_Graphs;

/**
 * Created by ys on 2017-03-03.
 */
public class BinarySearchTreeTest {
    public static void main(String[]args){
        BinarySearchTree test = new BinarySearchTree();
        test.add(-1);
        test.add(8);
        test.add(-10);
        test.add(5);

        System.out.println("-------");
        TreeNode result1 = test.searchByBF(8);
        System.out.println(result1.data);

        System.out.println("-------");
        TreeNode result2 = test.searchByBF(100);
        System.out.println(result2);

        System.out.println("-------");
        //test.remove(8);
    }
}
