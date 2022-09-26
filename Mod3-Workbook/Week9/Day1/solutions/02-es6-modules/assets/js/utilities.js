export const getIndex = () => {
    const wrapper = document.getElementById('wrapper');
    return parseInt(wrapper.dataset.index);
};
// demo purposes
export const removeIndex = () => console.log('removes index')