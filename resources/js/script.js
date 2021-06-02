let activity, snacks, day;
const activityList = ['go on a picnic', 'watch a movie', 'play at the playground', 'go to a restaurant', 'bake brownies', 'bake bannana bread', 'play Minecraft', 'play Roblox', 'make bubble tea'];
const snacksList = ['chips', 'gummies', 'sushi', 'munchies', 'spring rolls', 'chicken karaage', 'katsudon'];
const dayList = ['Friday', 'Saturday', 'Sunday'];

const generateMessage = () => {
    activity = activityList[Math.floor(Math.random() * activityList.length)];
    snacks = snacksList[Math.floor(Math.random() * snacksList.length)];
    day = dayList[Math.floor(Math.random() * dayList.length)];
    return `This weekend we should get some ${snacks} and ${activity}! Doesn't that sound fun? Let's do it this ${day}!`;
}