package bank.management.system;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;

public class Signup3 extends JFrame implements ActionListener {

    JRadioButton r1, r2, r3, r4;
    JCheckBox c1, c2, c3, c4, c5, c6, c7;
    JButton submitButton, cancelButton;
    String formno;

    public Signup3(String formno) {
        this.formno = formno;

        setTitle("New Account Application - Page 3");
        setLayout(null);
        getContentPane().setBackground(new Color(215, 252, 252));
        setSize(850, 800);
        setLocation(400, 20);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Bank logo
        ImageIcon i1 = new ImageIcon(ClassLoader.getSystemResource("icon/bank.png"));
        Image i2 = i1.getImage().getScaledInstance(100, 100, Image.SCALE_DEFAULT);
        ImageIcon i3 = new ImageIcon(i2);
        JLabel image = new JLabel(i3);
        image.setBounds(150, 5, 100, 100);
        add(image);

        // Labels
        JLabel l1 = new JLabel("Page 3:");
        l1.setFont(new Font("Raleway", Font.BOLD, 22));
        l1.setBounds(280, 40, 400, 40);
        add(l1);

        JLabel l2 = new JLabel("Account Details");
        l2.setFont(new Font("Raleway", Font.BOLD, 22));
        l2.setBounds(280, 70, 400, 40);
        add(l2);

        JLabel l3 = new JLabel("Account Type:");
        l3.setFont(new Font("Raleway", Font.BOLD, 18));
        l3.setBounds(100, 140, 200, 30);
        add(l3);

        // Radio buttons for account type
        r1 = new JRadioButton("Saving Account");
        r1.setFont(new Font("Raleway", Font.BOLD, 16));
        r1.setBackground(new Color(215, 252, 252));
        r1.setBounds(100, 180, 150, 30);
        add(r1);

        r2 = new JRadioButton("Fixed Deposit Account");
        r2.setFont(new Font("Raleway", Font.BOLD, 16));
        r2.setBackground(new Color(215, 252, 252));
        r2.setBounds(350, 180, 300, 30);
        add(r2);

        r3 = new JRadioButton("Current Account");
        r3.setFont(new Font("Raleway", Font.BOLD, 16));
        r3.setBackground(new Color(215, 252, 252));
        r3.setBounds(100, 220, 250, 30);
        add(r3);

        r4 = new JRadioButton("Recurring Deposit Account");
        r4.setFont(new Font("Raleway", Font.BOLD, 16));
        r4.setBackground(new Color(215, 252, 252));
        r4.setBounds(350, 220, 250, 30);
        add(r4);

        ButtonGroup accountTypeGroup = new ButtonGroup();
        accountTypeGroup.add(r1);
        accountTypeGroup.add(r2);
        accountTypeGroup.add(r3);
        accountTypeGroup.add(r4);

        // Card Number Labels
        JLabel l4 = new JLabel("Card Number:");
        l4.setFont(new Font("Raleway", Font.BOLD, 18));
        l4.setBounds(100, 300, 200, 30);
        add(l4);

        JLabel l5 = new JLabel("(Your 16-digit Card Number)");
        l5.setFont(new Font("Raleway", Font.BOLD, 12));
        l5.setBounds(100, 330, 200, 20);
        add(l5);

        JLabel l6 = new JLabel("XXXX-XXXX-XXXX-4841");
        l6.setFont(new Font("Raleway", Font.BOLD, 18));
        l6.setBounds(330, 300, 250, 30);
        add(l6);

        JLabel l7 = new JLabel("(It would appear on ATM card/cheque Book and Statements)");
        l7.setFont(new Font("Raleway", Font.BOLD, 12));
        l7.setBounds(330, 330, 500, 20);
        add(l7);

        // PIN Labels
        JLabel l8 = new JLabel("PIN:");
        l8.setFont(new Font("Raleway", Font.BOLD, 18));
        l8.setBounds(100, 370, 200, 30);
        add(l8);

        JLabel l9 = new JLabel("XXXX");
        l9.setFont(new Font("Raleway", Font.BOLD, 18));
        l9.setBounds(330, 370, 200, 30);
        add(l9);

        JLabel l10 = new JLabel("(4-digit Password)");
        l10.setFont(new Font("Raleway", Font.BOLD, 12));
        l10.setBounds(100, 400, 200, 20);
        add(l10);

        // Services Required
        JLabel l11 = new JLabel("Services Required:");
        l11.setFont(new Font("Raleway", Font.BOLD, 18));
        l11.setBounds(100, 450, 200, 30);
        add(l11);

        c1 = new JCheckBox("ATM CARD");
        c1.setBackground(new Color(215, 252, 252));
        c1.setFont(new Font("Raleway", Font.BOLD, 16));
        c1.setBounds(100, 500, 200, 30);
        add(c1);

        c2 = new JCheckBox("Internet Banking");
        c2.setBackground(new Color(215, 252, 252));
        c2.setFont(new Font("Raleway", Font.BOLD, 16));
        c2.setBounds(350, 500, 200, 30);
        add(c2);

        c3 = new JCheckBox("Mobile Banking");
        c3.setBackground(new Color(215, 252, 252));
        c3.setFont(new Font("Raleway", Font.BOLD, 16));
        c3.setBounds(100, 550, 200, 30);
        add(c3);

        c4 = new JCheckBox("EMAIL Alerts");
        c4.setBackground(new Color(215, 252, 252));
        c4.setFont(new Font("Raleway", Font.BOLD, 16));
        c4.setBounds(350, 550, 200, 30);
        add(c4);

        c5 = new JCheckBox("Cheque Book");
        c5.setBackground(new Color(215, 252, 252));
        c5.setFont(new Font("Raleway", Font.BOLD, 16));
        c5.setBounds(100, 600, 200, 30);
        add(c5);

        c6 = new JCheckBox("E-Statement");
        c6.setBackground(new Color(215, 252, 252));
        c6.setFont(new Font("Raleway", Font.BOLD, 16));
        c6.setBounds(350, 600, 200, 30);
        add(c6);

        // Declaration checkbox
        c7 = new JCheckBox("I hereby declare that the above entered details are correct to the best of my knowledge.", true);
        c7.setBackground(new Color(215, 252, 252));
        c7.setFont(new Font("Raleway", Font.BOLD, 12));
        c7.setBounds(100, 680, 600, 20);
        add(c7);

        // Form number display
        JLabel l12 = new JLabel("Form No : ");
        l12.setFont(new Font("Raleway", Font.BOLD, 14));
        l12.setBounds(700, 10, 100, 30);
        add(l12);

        JLabel l13 = new JLabel(formno);
        l13.setFont(new Font("Raleway", Font.BOLD, 14));
        l13.setBounds(760, 10, 60, 30);
        add(l13);

        // Buttons
        submitButton = new JButton("Submit");
        submitButton.setFont(new Font("Raleway", Font.BOLD, 14));
        submitButton.setBackground(Color.BLACK);
        submitButton.setForeground(Color.WHITE);
        submitButton.setBounds(250, 720, 100, 30);
        submitButton.addActionListener(this);
        add(submitButton);

        cancelButton = new JButton("Cancel");
        cancelButton.setFont(new Font("Raleway", Font.BOLD, 14));
        cancelButton.setBackground(Color.BLACK);
        cancelButton.setForeground(Color.WHITE);
        cancelButton.setBounds(420, 720, 100, 30);
        cancelButton.addActionListener(this);
        add(cancelButton);

        setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == submitButton) {
            if (!c7.isSelected()) {
                JOptionPane.showMessageDialog(null, "Please accept the declaration to proceed.");
                return;
            }

            String atype = null;
            if (r1.isSelected()) atype = "Saving Account";
            else if (r2.isSelected()) atype = "Fixed Deposit Account";
            else if (r3.isSelected()) atype = "Current Account";
            else if (r4.isSelected()) atype = "Recurring Deposit Account";

            if (atype == null) {
                JOptionPane.showMessageDialog(null, "Please select an Account Type");
                return;
            }

            StringBuilder fac = new StringBuilder();
            if (c1.isSelected()) fac.append("ATM CARD ");
            if (c2.isSelected()) fac.append("Internet Banking ");
            if (c3.isSelected()) fac.append("Mobile Banking ");
            if (c4.isSelected()) fac.append("EMAIL Alerts ");
            if (c5.isSelected()) fac.append("Cheque Book ");
            if (c6.isSelected()) fac.append("E-Statement ");

            Random random = new Random();
            StringBuilder cardBuilder = new StringBuilder();
            for (int i = 0; i < 12; i++) {
                cardBuilder.append(random.nextInt(10));
            }
            cardBuilder.append("4841"); // fixed last 4 digits
            String cardno = cardBuilder.toString();

            String pin = String.format("%04d", random.nextInt(10000));

            try {
                Connn conn = new Connn();

                String q1 = "INSERT INTO signupthree (form_no, account_Type, card_number, pin, facility) VALUES (?, ?, ?, ?, ?)";
                java.sql.PreparedStatement ps1 = conn.connection.prepareStatement(q1);
                ps1.setString(1, formno);
                ps1.setString(2, atype);
                ps1.setString(3, cardno);
                ps1.setString(4, pin);
                ps1.setString(5, fac.toString().trim());
                ps1.executeUpdate();

                String q2 = "INSERT INTO login (form_no, card_number, pin) VALUES (?, ?, ?)";
                java.sql.PreparedStatement ps2 = conn.connection.prepareStatement(q2);
                ps2.setString(1, formno);
                ps2.setString(2, cardno);
                ps2.setString(3, pin);
                ps2.executeUpdate();

                JOptionPane.showMessageDialog(null, "Card Number : " + cardno + "\nPin : " + pin);

                new Deposit(pin);  // Assuming Deposit class exists
                setVisible(false);

            } catch (Exception ex) {
                ex.printStackTrace();
                JOptionPane.showMessageDialog(null, "Error saving to database: " + ex.getMessage());
            }

        } else if (e.getSource() == cancelButton) {
            System.exit(0);
        }
    }

    public static void main(String[] args) {
        new Signup3("123456"); // example form number
    }
}
