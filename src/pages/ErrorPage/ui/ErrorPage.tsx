import cls from './ErrorPage.module.scss';

function ErrorPage() {
  return (
    <main className={cls.main}>
      <h1>🤭 Oops! Something went wrong...</h1>
      <a
        href="/"
        className={cls.link}
      >
        Return to home page
      </a>
    </main>
  );
}

export default ErrorPage;
