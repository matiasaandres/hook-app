const { renderHook } = require("@testing-library/react");
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter";


describe("prueba en el UseCounter ", () => {
  test("debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, resetCounter } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(resetCounter).toEqual(expect.any(Function));
  });

  test("debe de generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));

    const { counter, decrement, increment, resetCounter } = result.current;

    expect(counter).toBe(100);
  });

  test("debe de incrementar eñ contador", () => {
    const { result } = renderHook(() => useCounter());

    const {increment } = result.current;

    act(() => {
      increment(3);
    });

    expect(result.current.counter).toBe(13);
  });

  test("debe de decrementar el contador", () => {
    const { result } = renderHook(() => useCounter());

    const {decrement} = result.current;

    act(() => {
      decrement();
    });

    expect(result.current.counter).toBe(9);
  });

  test("debe de reinicar  el contador al valor inicial", () => {
    
    const { result } = renderHook(() => useCounter(11));

    const {resetCounter} = result.current;

    act(() => {
      resetCounter();
    });

    expect(result.current.counter).toBe(10);
  });
});
