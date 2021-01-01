import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction, GET_CERTS } from "../../StateManager/ducks/portfolio";

import { Loader } from "../../components/Loader/Loader.components";

import "./Certs.scss";

export function Certs() {
  const {
    loading,
    certs: { data: certs, nothing },
  } = useSelector((state) => state.portfolio);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!nothing) {
      if (!certs.length) {
        dispatch(getDataAction(GET_CERTS));
      }
    }
  }, [certs, nothing, dispatch]);

  return <main className="certs"></main>;
}
