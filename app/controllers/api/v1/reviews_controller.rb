# frozen_string_literal: true

module Api
  module V1
    class ReviewsController < ApplicationController
      protect_from_forgery with: :null_session

      def create
        review = Review.new(review_params)
        review.save!
      end

      def destroy
        review = Review.find_by!(id: params[:id])
        review.destroy
      end

      private

        def review_params
          params.require(:review).permit(:title, :description, :score, :airline_id)
        end
    end
  end
end
