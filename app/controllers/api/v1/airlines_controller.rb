# frozen_string_literal: true

# class Api::V1::AirlinesController < Api::V1::BaseController
#     def index
#         @airlines=Airline.all
#     end
# end

module Api
  module V1
    class AirlinesController < ApplicationController
      protect_from_forgery with: :null_session
      before_action :load_airline, only: %i[show update destroy]
      def index
        @airlines = Airline.includes(:reviews)
        @airlines.each do |airline|
          airline_avg_score = airline.avg_score
          airline.attributes.merge(avg_score: airline_avg_score)
        end
      end

      def show
        # airline_avg_score=@airline.avg_score()
        # @airline.attributes.merge(avg_score: airline_avg_score)
      end

      def create
        airline = Airline.new(airline_params)
        airline.save!
      end

      def update
        @airline.update(airline_params)
      end

      def destroy
        @airline.destroy
      end

      private

        def airline_params
          params.require(:airline).permit(:name, :image_url)
        end

        def load_airline
          @airline = Airline.includes(:reviews).where(slug: params[:slug]).first
        end
    end
  end
end
