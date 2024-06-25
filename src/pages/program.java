public class program{
    
     public static void main(String args[]){
         int rows=5;
         for(int i=0;i<rows;i++){
            for(int j=2*(rows-i);j>=0;j--){
                System.out.print(" ");
            }
            for(int k=0;k!=2*i-1;k++){
                System.out.print("k");
            }
            System.out.println();
         }
     }
}