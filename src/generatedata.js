const fs = require('fs');
const path = require('path');

const data = {
    "Group": ["Public Sale", "Community Incentive", "Foundation", "Seed (Launch Partners)", "Private Round", "Team", "Partners & Advisors"],
    "Initial Amount": [33000000, 60000000, 93000000, 29400000, 10800000, 0, 0],
    "Monthly Amount": [0, 0, 0, 2100000, 1350000, 625000, 1250000],
    "Start Month": [ 1, 1, 1, 1, 1, 12, 1],
    "Duration": [ 1, 1, 1, 6, 12, 36, 12]
};

const generateData = () => {
    const groups = data.Group.map((group, index) => ({
        group: group,
        initialAmount: data["Initial Amount"][index],
        monthlyAmount: data["Monthly Amount"][index],
        startMonth: data["Start Month"][index],
        duration: data.Duration[index]
    }));

    const months = 48;
    const result = [];

    for (let month = 1; month <= months; month++) {
        const row = { name: `Month ${month}` };
        groups.forEach(group => {
            if (month >= group.startMonth && month < group.startMonth + group.duration) {
                const monthsEarned = month - group.startMonth + 1;
                row[group.group] = group.initialAmount + monthsEarned * group.monthlyAmount;
            } else if (month < group.startMonth) {
                row[group.group] = group.initialAmount;
            } else if (month >= group.startMonth + group.duration) {
                row[group.group] = group.initialAmount + group.duration * group.monthlyAmount;
            }
        });
        result.push(row);
    }

    return result;
};

const dataOutput = generateData();
const outputPath = path.join(__dirname, '../public', 'data', 'data.json');

fs.writeFileSync(outputPath, JSON.stringify(dataOutput, null, 2));
console.log(`Data generated and saved to ${outputPath}`);
