import java.io.*;
import java.util.*;

class Find {
    private Stack<Character> stack = new Stack<>();
    private char[] array;

    public Find(String text) {
        array = text.toCharArray();
    }

    public String Check_Balance() {
        for (int i = 0; i < array.length; i++) {
            switch (array[i]) {
                case '(' : case '{' : case '[':
                    stack.add(array[i]);
                    break;
                case ')':
                    if (!stack.isEmpty() && stack.peek() == '(')
                        stack.pop();
                    else
                        return "no";
                    break;
                case '}':
                    if (!stack.isEmpty() && stack.peek() == '{')
                        stack.pop();
                    else
                        return "no";
                    break;
                case ']':
                    if (!stack.isEmpty() && stack.peek() == '[')
                        stack.pop();
                    else
                        return "no";
                    break;
            }
        }
        if(!stack.isEmpty())
            return "no";
        return "yes";
    }
}

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter wr = new BufferedWriter(new OutputStreamWriter(System.out));

        ArrayList<String> question = new ArrayList<String>();
        String text = " ";
        while (!text.equals(".")) {
            text = br.readLine();
            question.add(text);
        }

        br.close();

        String answer;

        for (int i = 0; i < (question.size() - 1); i++) {
            Find find = new Find(question.get(i));
            answer = find.Check_Balance();
            wr.write(answer);
            wr.newLine();
            wr.flush();
        }

        wr.close();
    }
}