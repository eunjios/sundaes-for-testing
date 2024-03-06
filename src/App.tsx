/** @jsxImportSource @emotion/react */

import Header from './components/header/Header';
import OrderForm from './components/form/Form';
import OrderSummary from './components/order-summary/OrderSummary';
import Completed from './components/completed/Completed';
import { useOrderData, useOrderPhase } from './hooks';

function App() {
  const data = useOrderData();
  const { phase, moveToInProgress, moveToReview, moveToCompleted } =
    useOrderPhase();

  switch (phase) {
    case 'inProgress':
      return (
        <div>
          <Header />
          <OrderForm {...data} moveToReview={moveToReview} />
        </div>
      );

    case 'review':
      return (
        <div>
          <Header />
          <OrderSummary
            {...data}
            moveToInProgress={moveToInProgress}
            moveToCompleted={moveToCompleted}
          />
        </div>
      );

    case 'completed':
      return (
        <div>
          <Header />
          <Completed
            moveToInProgress={moveToInProgress}
            resetOrder={data.resetOrder}
          />
        </div>
      );
  }
}

export default App;
