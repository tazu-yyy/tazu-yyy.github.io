import '../styles/globals.scss'
import { AnimatePresence } from "framer-motion";
import { useTransitionFix } from "../lib/useTransitionFix";

function MyApp({ Component, pageProps, router }) {
  const transitionCallback = useTransitionFix()

  return (
    <div>
      <script> </script>
      <AnimatePresence exitBeforeEnter onExitComplete={transitionCallback}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  )
}

export default MyApp
