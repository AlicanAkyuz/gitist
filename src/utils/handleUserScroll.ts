type onLoadMoreCallback = () => object;

const handleUserScroll = (onLoadMore: onLoadMoreCallback) => {
  if (
    document.documentElement.clientHeight + document.documentElement.scrollTop >=
    document.documentElement.scrollHeight
  ) {
    onLoadMore();
  }
};

export default handleUserScroll;
