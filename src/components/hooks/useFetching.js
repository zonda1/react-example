import { useState } from 'react';

export const useFetching=(clb)=> {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    
    const fetching=async()=>{
        
        try {
        setIsLoading(true);
          await clb();
        } catch (error) {
            setIsError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching,isLoading,isError];
}