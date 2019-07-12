type onLoadMoreCallback = () => object;

const handleScroll = (onLoadMore: onLoadMoreCallback) => {
  if (
    document.documentElement.clientHeight + document.documentElement.scrollTop >=
    document.documentElement.scrollHeight
  ) {
    onLoadMore();
  }
};

export default handleScroll;
