#include <string>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

vector<int> solution(vector<int> fees, vector<string> records) {
    vector<int> answer;
    vector<pair<string, int>> result;
    vector<pair<string, int>> temp;
    for (int i = 0; i < records.size(); i++) {
        int time = stoi(records[i].substr(0, 2)) * 60 + stoi(records[i].substr(3, 5));
        string tempNum = records[i].substr(6, 4);
        if (records[i].length() == 13) {
            temp.push_back({ tempNum, time });
        }
        else {
            int flag = -1;
            for (int j = 0; j < result.size(); j++) {
                if (result[j].first == tempNum) {
                    flag = j;
                    break;
                }
            }
            for (int j = 0; j < temp.size(); j++) {
                if (temp[j].first == tempNum) {
                    if (flag >= 0) {
                        result[flag].second += time - temp[j].second;
                    }
                    else {
                        result.push_back({ tempNum, time - temp[j].second });
                    }
                    temp.erase(temp.begin() + j);
                    break;
                }
            }
        }
    }

    for (int i = 0; i < temp.size(); i++) {
        bool flag = false;
        for (int j = 0; j < result.size(); j++) {
            if (result[j].first == temp[i].first) {
                result[j].second += 1439 - temp[i].second;
                flag = true;
                break;
            }
        }
        if (!flag) {
            result.push_back({ temp[i].first, 1439 - temp[i].second });
        }
    }

    sort(result.begin(), result.end(), [](pair<string, int> a, pair<string, int> b) { return a.first < b.first; });
    for (int i = 0; i < result.size(); i++) {
        answer.push_back(fees[1] + ((result[i].second - fees[0]) <= 0 ? 0 : ceil((float)(result[i].second - fees[0]) / fees[2]) * fees[3]));
    }
    return answer;
}