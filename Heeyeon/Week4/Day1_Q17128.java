public class Day1_Q17128 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int Q = Integer.parseInt(st.nextToken());

        long[] score = new long[N];
        int[] cow = new int[Q];

        st = new StringTokenizer(br.readLine());

        for (int i = 0; i < N; i++) {
            score[i] = Long.parseLong(st.nextToken());
        }

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < Q; i++) {
            cow[i] = Integer.parseInt(st.nextToken());
        }

        long[] s=new long[N];
        long temp=1;
        long result=0;

        for (int i = 0; i < 4; i++) {
            temp *= score[i];
        }
        s[0] = temp;
        result += temp;

        for (int i = 1; i < score.length; i++) {
            temp = s[i - 1];
            temp /= score[i - 1];
            if (i + 3 >= score.length) {
                temp *= score[i + 3 - score.length];
            } else {
                temp *= score[i + 3];
            }

            s[i] = temp;
            result += temp;
        }

        for (int c : cow) {
            for (int i = 0; i < 4; i++) {
                c--;
                int index = c;
                if (c < 0) {
                    index = score.length + c;
                }
                result -= s[index];
                s[index] *= -1;
                result += s[index];
            }
            bw.write(String.valueOf(result)+"\n");
        }
        bw.close();
    }
}