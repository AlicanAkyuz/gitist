const handleScroll = onLoadMore => {
  if (
    document.documentElement.clientHeight + document.documentElement.scrollTop >=
    document.documentElement.scrollHeight
  ) {
    onLoadMore();
  }
};

export default handleScroll;
