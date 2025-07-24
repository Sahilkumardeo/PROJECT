import java.security.SecureRandom;
import java.util.Scanner;
 class PasswordGenerator {

    private static final String LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    private static final String UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final String DIGITS = "0123456789";
    private static final String SPECIAL_CHARACTERS = "!@#$%^&*()-_+=<>?";

    private SecureRandom random;

    public PasswordGenerator() {
        random = new SecureRandom();
    }

    public String generatePassword(int length, boolean includeUppercase, boolean includeDigits, boolean includeSpecialCharacters) {
        StringBuilder password = new StringBuilder(length);
        String characterPool = LOWERCASE;

        if (includeUppercase) {
            characterPool += UPPERCASE;
        }
        if (includeDigits) {
            characterPool += DIGITS;
        }
        if (includeSpecialCharacters) {
            characterPool += SPECIAL_CHARACTERS;
        }

        for (int i = 0; i < length; i++) {
            int index = random.nextInt(characterPool.length());
            password.append(characterPool.charAt(index));
        }

        return password.toString();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        PasswordGenerator passwordGenerator = new PasswordGenerator();

        System.out.print("Enter the desired length of the password: ");
        int length = scanner.nextInt();
        scanner.nextLine(); // Consume newline

        System.out.print("Include uppercase letters? (yes/no): ");
        boolean includeUppercase = scanner.nextLine().equalsIgnoreCase("yes");

        System.out.print("Include digits? (yes/no): ");
        boolean includeDigits = scanner.nextLine().equalsIgnoreCase("yes");

        System.out.print("Include special characters? (yes/no): ");
        boolean includeSpecialCharacters = scanner.nextLine().equalsIgnoreCase("yes");

        String password = passwordGenerator.generatePassword(length, includeUppercase, includeDigits, includeSpecialCharacters);
        System.out.println("Generated Password: " + password);

        scanner.close();
    }
}
