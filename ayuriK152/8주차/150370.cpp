#include <string>
#include <vector>
#include <unordered_map>

using namespace std;

vector<int> solution(string today, vector<string> terms, vector<string> privacies) {
    vector<int> answer;
    int year = stoi(today.substr(0, 4));
    int date = (stoi(today.substr(5, 2)) - 1) * 28 + stoi(today.substr(8, 2));
    unordered_map<string, int> termsHash;
    for (int i = 0; i < terms.size(); i++)
        termsHash.insert({ terms[i].substr(0, 1), stoi(terms[i].substr(2, terms[i].length() - 2)) });
    for (int i = 0; i < privacies.size(); i++) {
        int tempYear = stoi(privacies[i].substr(0, 4));
        int tempDate = (stoi(privacies[i].substr(5, 2)) - 1) * 28 + stoi(privacies[i].substr(8, 2));

        tempDate += termsHash[privacies[i].substr(11, 1)] * 28;
        if (tempDate > 336) {
            if (tempDate % 366 != 0) {
                tempYear += tempDate / 336;
                tempDate %= 336;
            }
            else {
                tempYear += tempDate / 336 - 1;
                tempDate = 336;
            }
        }
        if (tempYear > year || (tempYear == year && tempDate > date))
            continue;
        answer.push_back(i + 1);
    }
    return answer;
}