package DataStructure.Trees_and_Graphs;

import java.util.NoSuchElementException;

/**
 * Created by ys on 2017-03-03.
 */
public class BinarySearchTree {
    private TreeNode root;

    public void add(int d){
        root = addNode(root, d);
    }

    private TreeNode addNode(TreeNode tempRoot, int d){

        TreeNode ancestor = tempRoot;
        TreeNode newNode = new TreeNode(d);

        if( ancestor == null ) {
            return newNode;
        } else if( ancestor.data >=  newNode.data ){
            ancestor.left = addNode(ancestor.left, d);
            return ancestor;
        } else if( ancestor.data < newNode.data ){
            ancestor.right = addNode(ancestor.right, d);
            return ancestor;
        } else {
            return ancestor;
        }
    }

    public TreeNode searchByBF(int d){
        TreeNode header = this.root;
        while( header != null ){
            if( header.data == d ){
                return new TreeNode(d);
            } else if( header.data > d ){
                header = header.left;
            } else if( header.data < d ){
                header = header.right;
            }
        }
        return null;
    }

    public void remove(int d){
        TreeNode header = this.root;
        TreeNode ancestor = new TreeNode();
        while( header != null ){
            if( header.data == d ) {
                removeNode(header, ancestor, d);
                return;
            } else if ( header.data > d ){
                ancestor = header;
                header = header.left;
            } else if ( header.data < d ){
                ancestor = header;
                header = header.right;
            }
        }
    }

    private void removeNode(TreeNode header, TreeNode ancestor, int d){
        // case1. when target node is leaf node
        if( header.left == null & header.right == null ) {
            if( ancestor.left == header ){
                ancestor.left = null;
                return;
            } else if( ancestor.right == header ){
                ancestor.right = null;
                return;
            }
        }

        // case2. when target node has one leaf
        if( header.left == null & header.right != null ){
            header = header.right;
            return;
        } else if( header.left != null & header.right == null ){
            header = header.left;
            return;
        }

        // case3. when target node has two leafs
        if( header.left != null & header.right != null ){
            TreeNode replacement = getLesserThanTarget(header);
            header = replacement;
            return;
        }
    }

    private TreeNode getLesserThanTarget(TreeNode target){
        TreeNode header = target;

        while( true ){
            if( header.right.right == null ) break;
            target = target.right;
        }
        TreeNode result = header.right;
        header.right = null;

        return result;
    }
}
