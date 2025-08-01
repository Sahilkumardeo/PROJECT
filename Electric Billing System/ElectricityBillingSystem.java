import java.util.*;

// create class ElectricityBillExample6 to calculate electricity bill using the user-defined method
class ElectricityBillExample6
{
    // main() method start
    public static void main(String args[])
    {
        // declare variable billToPay
        int units;

        // create Scanner class object to take input from user
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter number of units for calculating electricity bill.");
        units = sc.nextInt();

        // call calculateBill() method and print the data returned from it
        System.out.println("The electricity bill for "+units+" is:" + calculateBill(units));
    }
    // create a user-defined method that calculates electricity bills for the given units
    static double calculateBill(double units)
    {
        // variable to calculate electricity bill to pay
        double billToPay = 0;

        // check whether units are less than 100
        if(units < 100)
        {
            billToPay = units*1.20;
        }
        // check whether the units are less than 300
        else if(units < 300){
            billToPay = 100*1.20+(units - 100)*2;
        }
        // check whether the units are greater than 300
        else if(units > 300)
        {
            billToPay = 100*1.20+200*2+(units - 300)*3;
        }

        // returned result
        return billToPay;
    }
}