import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { toast } from "react-toastify";

function Tickets() {
  const dispatch = useDispatch();

  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>Tickets</h1>
    </div>
  );
}

export default Tickets;
