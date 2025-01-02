```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic, this will run only once after mount
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```