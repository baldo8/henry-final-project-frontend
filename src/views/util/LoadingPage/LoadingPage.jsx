/*

  About:
    ...

  @param ...

  Comments:
    ...

*/
import "./LoadingPage.scss";
import LoadingFallback from "@components/fallbacks/LoadingFallback"

function LoadingPage() {
  /* --------------------------------------------------------------------------------*/
  /* Main */
  /* --------------------------------------------------------------------------------*/
  return (
    <div className="wrapper-LoadingPage">
      <main>
        <LoadingFallback/>
      </main>
    </div>
  );
}

export default LoadingPage;