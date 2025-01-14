# react sample context
This is a sample for how to use context with the tabs router.

The context is defined in /context/context.tsx and the <Provider> wrapper is located in /app/_layout.tsx. In this file I also log the value of lang (provided via context) to prove that its available here. I also log the value of lang in /app/(tabs)/explore.tsx to prove that its available through the entire tree. It does not stop at some point.
