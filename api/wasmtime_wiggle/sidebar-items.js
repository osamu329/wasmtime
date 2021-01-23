initSidebarItems({"enum":[["GuestError",""],["Trap","A runtime-independent way for Wiggle to terminate WebAssembly execution. Functions that are marked `(@witx noreturn)` will always return a Trap. Other functions that want to Trap can do so via their `UserErrorConversion` trait, which transforms the user's own error type into a `Result<abierror, Trap>`."]],"macro":[["from_witx","This macro expands to a set of `pub` Rust modules:"],["wasmtime_integration","Define the structs required to integrate a Wiggle implementation with Wasmtime."]],"mod":[["bitflags","A typesafe bitmask flag generator useful for sets of C-style bitmask flags. It can be used for creating typesafe wrappers around C APIs."],["tracing","A scoped, structured logging and diagnostics system."],["witx",""]],"struct":[["BorrowHandle","A handle to a borrow on linear memory. It is produced by `{mut, shared}_borrow` and consumed by `{mut, shared}_unborrow`. Only the `GuestMemory` impl should ever construct a `BorrowHandle` or inspect its contents."],["GuestPtr","A guest pointer into host memory."],["GuestSlice","A smart pointer to an sharedable slice in guest memory. Usable as a `&'a [T]` via [`std::ops::Deref`]."],["GuestSliceMut","A smart pointer to a mutable slice in guest memory. Usable as a `&'a [T]` via [`std::ops::Deref`] and as a `&'a mut [T]` via [`std::ops::DerefMut`]."],["GuestStr","A smart pointer to an sharedable `str` in guest memory. Usable as a `&'a str` via [`std::ops::Deref`]."],["GuestStrMut","A smart pointer to a mutable `str` in guest memory. Usable as a `&'a str` via [`std::ops::Deref`] and as a `&'a mut str` via [`std::ops::DerefMut`]."],["Region","Represents a contiguous region in memory."],["WasmtimeGuestMemory","Lightweight `wasmtime::Memory` wrapper so we can implement the `wiggle::GuestMemory` trait on it."]],"trait":[["GuestErrorType","A trait for types which are used to report errors. Each type used in the first result position of an interface function is used, by convention, to indicate whether the function was successful and subsequent results are valid, or whether an error occured. This trait allows wiggle to return the correct value when the interface function's idiomatic Rust method returns Ok()."],["GuestMemory","A trait which abstracts how to get at the region of host memory taht contains guest memory."],["GuestType","A trait for types that are intended to be pointees in `GuestPtr<T>`."],["GuestTypeTransparent","A trait for `GuestType`s that have the same representation in guest memory as in Rust. These types can be used with the `GuestPtr::as_slice` method to view as a slice."],["Pointee","Types that can be pointed to by `GuestPtr<T>`."]]});