#include <string>
#include <vector>

using namespace std;

string solution(vector<string> survey, vector<int> choices) {
    string answer = "";
    vector<string> marks = { "RT", "CF", "JM", "AN" };
    vector<pair<int, int>> scores;
    for (int i = 0; i < 4; i++)
        scores.push_back({ 0, 0 });

    for (int i = 0; i < survey.size(); i++) {
        int scoreIdx;
        if (survey[i] == "RT" || survey[i] == "TR") {
            scoreIdx = 0;
            if (survey[i] == "TR")
                choices[i] = -(choices[i] - 4) + 4;
        }
        else if (survey[i] == "CF" || survey[i] == "FC") {
            scoreIdx = 1;
            if (survey[i] == "FC")
                choices[i] = -(choices[i] - 4) + 4;
        }
        else if (survey[i] == "JM" || survey[i] == "MJ") {
            scoreIdx = 2;
            if (survey[i] == "MJ")
                choices[i] = -(choices[i] - 4) + 4;
        }
        else if (survey[i] == "AN" || survey[i] == "NA") {
            scoreIdx = 3;
            if (survey[i] == "NA")
                choices[i] = -(choices[i] - 4) + 4;
        }

        if (choices[i] == 1)
            scores[scoreIdx].first += 3;
        else if (choices[i] == 2)
            scores[scoreIdx].first += 2;
        else if (choices[i] == 3)
            scores[scoreIdx].first += 1;
        else if (choices[i] == 5)
            scores[scoreIdx].second += 1;
        else if (choices[i] == 6)
            scores[scoreIdx].second += 2;
        else if (choices[i] == 7)
            scores[scoreIdx].second += 3;
    }

    for (int i = 0; i < 4; i++) {
        if (scores[i].first >= scores[i].second)
            answer += marks[i][0];
        else
            answer += marks[i][1];
    }
    return answer;
}