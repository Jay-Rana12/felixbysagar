const fs = require('fs');
const input = `1. Brijal Savaliya | Canada | Work Visa
2. Geetaben D. Patel | Canada | Visitor Visa
3. Sriyam Savaliya | Canada | Student Visa
4. Soni Shanikumar | New Zealand | Work Visa
5. Vidhi S. Soni | New Zealand | Dependent Visa
6. Divy S. Soni | New Zealand | Dependent Visa
7. Sunny Prajapati | New Zealand | Work Visa
8. Gambhir Singh | UK | Dependent Visa
9. Dhruvkumar Patel | UK | Student Visa
10. Foram Patel | UK | Work Visa
11. Meenaben Savaliya | Canada | Work Visa
12. Sanjay Patel | UK | Work Visa
13. Dipen Patel | New Zealand | Work Visa
14. Hansaben Patel | UK | Visitor Visa (10 Year)
15. Parthkumar Patel | UK | Dependent Visa
16. Rameshbhai Patel | UK | Visitor Visa (10 Year)
17. Sagarkumar Patel | Spain | Visitor Visa
18. Sweta Patel | UK | Work Visa
19. Hardikkumar Viradiya | Singapore | Student Visa
20. Riya Rupareliya | Singapore | Student Visa
21. Parth Chothani | Singapore | Student Visa
22. Vijay Panchal | Singapore | Student Visa
23. Parth Akhaja | Singapore | Student Visa
24. Nikunjbhai Patel | Mauritius | Student Visa
25. Rahul Patel | UK | Dependent Visa
26. Kiritbhai Jogani | UK | Visitor Visa
27. Parulben Jogani | UK | Visitor Visa
28. Payal Patel | UK | Work Visa
29. Jay Sorathiya | New Zealand | Work Visa
30. Bhavesh Desai | UK | Dependent Visa
31. Hiren Dhaduk | New Zealand | Work Visa
32. Kiya Desai | UK | Dependent Visa
33. Krima Patel | UK | Dependent Visa
34. Luckykumari Jadeja | UK | Work Visa
35. Shivani Patel | New Zealand | Dependent Visitor Visa
36. Dharmeshbhai Patel | USA | Visitor Visa
37. Akshar J. Desai | UK | Visitor Visa
38. Geetaben P. Patel | USA | Visitor Visa
39. Pareshkumar D. Dobaria | USA | Visitor Visa
40. Akash Desai | New Zealand | Work Visa
41. Prashantkumar M. Patel | USA | Visitor Visa
42. Suraj P. Dobaria | USA | Visitor Visa
43. Dipakkumar K. Bhesania | Canada | Visitor Visa
44. Rekhaben D. Bhesania | Canada | Visitor Visa
45. Renishkumar A. Patel | New Zealand | Work Visa
46. Jietendrasinh Sodha | New Zealand | Work Visa
47. Jitendrasingh | UK | Visitor Visa
48. Bhavesh D. Hapani | USA | Visitor Visa
49. Sanju Panwar | UK | Visitor Visa
50. Bhargav P. Gorasiya | New Zealand | Work Visa
51. Nikhar Hirpara | USA | Student Visa
52. Karan Rathod | Italy | Free Study Visa
53. Siddarth Lunagariya | Canada | Visitor Visa
54. Manubhai S. Patel | USA | Visitor Visa
55. Minaben M. Patel | USA | Visitor Visa
56. Arpan V. Patel | New Zealand | Work Visa
57. Dhavalkumar B. Desai | New Zealand | Work Visa
58. Kaushl J. Panchal | USA | Visitor Visa
59. Hiteshkumar M. Savaliya | USA | Visitor Visa
60. Manishaben H. Savaliya | USA | Visitor Visa
61. Jashiben Ramesh Desai | USA | Visitor Visa
62. Ishaan Rameshbhai Desai | USA | Visitor Visa
63. Alpaben G. Panchal | Canada | Visitor Visa`;

const getFlag = (country) => {
    country = country.toLowerCase().trim();
    if (country === 'usa' || country === 'us') return 'us';
    if (country === 'uk') return 'gb';
    if (country === 'new zealand') return 'nz';
    if (country === 'canada') return 'ca';
    if (country === 'italy') return 'it';
    if (country === 'spain') return 'es';
    if (country === 'singapore') return 'sg';
    if (country === 'mauritius') return 'mu';
    return 'un'; // unknown
};

const lines = input.split('\n');
const result = lines.map(line => {
    const parts = line.split('|').map(p => p.trim());
    const nameStr = parts[0].replace(/^\d+\.\s*/, '');
    const country = parts[1];
    const visa = parts[2];
    const flag = `https://flagcdn.com/w320/${getFlag(country)}.png`;
    return `    { name: "${nameStr}", country: "${country}", visa: "${visa}", flag: "${flag}" }`;
});

fs.writeFileSync('new_stories.js', `const textStories = [\n${result.join(',\n')}\n];\n`);
console.log('done');
