class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if (strs.empty()) return "";
        string prefix = strs[0]; // Initialize prefix as the first string
        for (int i = 1; i < strs.size(); i++) {
            // Compare each string with the prefix and update the prefix accordingly
            int j = 0;
            while (j < prefix.length() && j < strs[i].length() && prefix[j] == strs[i][j]) {
                j++;
            }
            prefix = prefix.substr(0, j);
            if (prefix.empty()) break; // If prefix becomes empty, no need to check further
        }
        return prefix;
    }
};