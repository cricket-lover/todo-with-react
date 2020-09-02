const nextStatusList = { todo: 'doing', doing: 'done', done: 'todo' };

const getDefaultStatus = () => 'todo';

const getNextStatus = (currentStatus) => {
  return nextStatusList[currentStatus];
};

export { getDefaultStatus, getNextStatus };
