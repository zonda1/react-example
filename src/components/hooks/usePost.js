import { useMemo } from 'react';

export const useSortedPosts=(posts,sort)=>{

    const sortedTopics = useMemo(() => {
        // console.log('Hook 1 worked');
        if (sort) {
          console.log(sort);
    
          return [...posts].sort((a, b) =>
            a[sort].localeCompare(b[sort])
          );
        }
        return posts;
      }, [sort, posts]);

      return sortedTopics;
    
}

export const useSortedAndFilteredPosts=(posts,sort,query)=>{

    const sortedTopics=useSortedPosts(posts,sort);

    const filterdTopics = useMemo(() => {
        // console.log('Hook 2 worked');
        return sortedTopics.filter((t) =>
          t.title.toLowerCase().includes(query)
        );
      }, [query, sortedTopics]);

      return filterdTopics;
}