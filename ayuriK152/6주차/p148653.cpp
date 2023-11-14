#include <string>
#include <vector>
#include <cmath>

using namespace std;

int solution(int storey) {
    int answer = 0;
    vector<int> nums;
    string str = to_string(storey);
    for (int i = 0; i < str.length(); i++)
        nums.push_back((int)str[i] - 48);
    while (nums.size() > 0) {
        if (nums.back() > 5) {
            answer += 10 - nums.back();
            if (nums.size() > 1)
                nums[nums.size() - 2]++;
            else
                nums.insert(nums.begin(), 1);
        }
        else if (nums.back() < 5) {
            answer += nums.back();
        }
        else if (nums.back() == 5) {
            if (nums.size() > 1) {
                nums[nums.size() - 2] += nums[nums.size() - 2] >= 5 ? 1 : 0;
            }
            answer += 5;
        }
        nums.pop_back();
    }
    return answer;
}