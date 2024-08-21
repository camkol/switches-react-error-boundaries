import React from "react";
import LightSwitch from "./LightSwitch";
import ErrorFallback from "./ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import CustomErrorBoundary from "./CustomErrorBoundary";
import { logError } from "./error-logging-service";

export default function App() {
  return (
    <div className="container">
      {[1, 2, 3, 4].map((num) => {
        return (
          <ErrorBoundary
            onError={logError}
            FallbackComponent={(props) => {
              return <ErrorFallback {...props} switchNumber={num} />;
            }}
          >
            <LightSwitch switchNumber={num} />
          </ErrorBoundary>
        );
      })}{" "}
      <CustomErrorBoundary>
        <LightSwitch switchNumber={5} />
        <LightSwitch switchNumber={6} />
      </CustomErrorBoundary>
      <CustomErrorBoundary>
        <LightSwitch switchNumber={7} />
      </CustomErrorBoundary>
      <LightSwitch switchNumber={8} />
    </div>
  );
}
